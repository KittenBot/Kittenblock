#!/usr/bin/env python
# vim: tabstop=8 expandtab shiftwidth=4 softtabstop=4

from StringIO import StringIO
import getopt
import gzip
import json
import sys
import urllib2

pretend = False
downloaded = set()
cdn = 'cdn.assets.scratch.mit.edu'
#cdn = 'cdn.assets.scratch.ly'

def download(fileName):
    if fileName in downloaded: return None
    request = urllib2.Request('http://'+cdn+'/internalapi/asset/{0}/get/'.format(fileName))
    print(request.get_full_url())
    if pretend: return None
    request.add_header('Accept-encoding', 'gzip')
    response = urllib2.urlopen(request)
    contents = response.read()
    if response.info().get('Content-Encoding') == 'gzip':
        rawFile = StringIO(contents)
        gzFile = gzip.GzipFile(fileobj = rawFile)
        contents = gzFile.read()

    with open(fileName, 'wb') as f:
        f.write(contents)
    downloaded.add(fileName)
    return contents

def downloadMediaLibraryFiles(mediaLibFileName):
    print("Processing "+mediaLibFileName)
    with open(mediaLibFileName) as f:
        library = json.load(f)
        for item in library:
            fileName = item['md5']
            contents = download(fileName)
            if contents and fileName.lower().endswith('.json'):
                downloadSpriteFiles(contents)

def downloadSpriteFiles(spriteJSON):
    sprite = json.loads(spriteJSON)
    for sound in sprite.get('sounds',[]):
        download(sound['md5'])
    for costume in sprite.get('costumes',[]):
        download(costume['baseLayerMD5'])

def main():
    try:
        opts, args = getopt.gnu_getopt(sys.argv[1:], "p", ["pretend"])
    except getopt.GetoptError as err:
        print(err)
        sys.exit(2)

    for o,a in opts:
        if o in ("-p", "--pretend"):
            global pretend
            pretend = True
        else:
            assert False, "Unhandled option: " + o
    downloadMediaLibraryFiles("libs/backdropLibrary.json")
    downloadMediaLibraryFiles("libs/soundLibrary.json")
    downloadMediaLibraryFiles("libs/spriteLibrary.json")
    downloadMediaLibraryFiles("libs/costumeLibrary.json")
    downloadMediaLibraryFiles("../miscellaneous.json")

if __name__ == "__main__":
    main()
