# CDA aka Clinical Document Architecture
## Introduction
I came across with CDA firstly when using Apple Health. It's a standard to store, archive and share health data with patients and your clinical institutions. CDA is developed by HL7 since 1996 and available since 2000.

## Structure and standards
CDA is based on XML. This means that the content is structured by tags. In this article I'll focus on the CDA standard that Apple uses with HealthKit, CDA release 2.

## Making a CDA file
Firstly we'll need to make our CDA file. For this we will create a new file with the .XML file format.

There are some basic tags that we'll have to create:
```xml
    <?xml version="1.0" encoding="UTF-8"?>
    <?xml-stylesheet type="text/xsl" href="CDA.xsl"?>
```
For the main data we will use the `<ClinicalDocument />` tag with some attributes to furthermore specify the versions that we're using.