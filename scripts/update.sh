#!/bin/sh

PROPERTIES=`mktemp`
node convert.js codepoints > $PROPERTIES
sed "/IconsLists/ r $PROPERTIES" template > ../MaterialIcons/MaterialIcons.qml
node convertList.js codepoints > $PROPERTIES
sed "/IconsLists/ r $PROPERTIES" templateList > ../MaterialIcons/ListMaterialIcons.qml
