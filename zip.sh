#!/bin/bash
zip -r $1.zip ./js ./css ./media ./*.html -x **/_* **/.* **/*.rb **/.DS_Store */.keep
