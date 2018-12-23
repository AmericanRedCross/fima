# FIMA
Financial institutions and markets assessment tool - ODK 2.0 Table and Survey

## Overview 
FIMA is the data management application on top of ODK 2 framework. This application has been developed using ODK Application Designer. ODK Application Designer is a tool to design data management applications on ODK 2 Framework. It works in conjunction with Excel or OpenOffice for form design, the Chrome browser for rendering, and your favorite editor for template design.

## Prerequisites
- Open Data Kit 2.0 Server (cloud service)
- [ODK Services](https://docs.opendatakit.org/odk2/services-intro/) (Android Application)
- [ODK Tables](https://docs.opendatakit.org/odk2/tables-intro/) (Android Application)
- [ODK Application Designer](https://docs.opendatakit.org/odk2/app-designer-intro/) (Web Application)
- Setup Development Environment: [Java, NodeJs, Grunt and Adnroid SDK](https://docs.opendatakit.org/odk2/app-designer-setup/) 

Note: If you want to reset (delete all existing applications and data) your **Open Data Kit 2.0 Server (cloud service)**, You need [ODK Suitcase](https://docs.opendatakit.org/odk2/suitcase-install/).


## Installation
- Clone `arc_fima` and `arc_fima_commodity` inside your `.../app/config/tables/` directory of your **ODK Application Designer** application.
```
cd path/app-designer/app/config/tables/
git clone https://github.com/AmericanRedCross/fima.git .
```
- Navigate to the root of your **ODK Application Designer** directory and run the `grunt` command to launch the ODK Application Designer on your chrome browser to test the application (FIMA).

## Required CSV Files
- countries.csv (country)
- admin1.csv (region/state)
- admin2.csv (province/city/town)
- admin3.csv (municipality/county)
- admin4.csv (barangay/village/street)

#### countries.csv
Countries CSV file will contain list of the contries where the FIMA app will be deployed.

#### admin1.csv
admin1.csv will contain first degree of the administrative region of any countries listed on the countries.csv

Similarly, **admin2**, **admin3** and **admin4** CSV files will contain lower degree of administrative regions. 
**NOTE:** See the sample CSV files and maintain the same heading (title) of each columns of the CSV files(`fima/arc_fima/forms/arc_fima/*.csv`)

## Deployement

### Install APP on Android Device

### Upload APP to the ODK2-Server



## Documnetation in Progress

#### App UI and Templating is under development. The core form and data endpoints have been created.

