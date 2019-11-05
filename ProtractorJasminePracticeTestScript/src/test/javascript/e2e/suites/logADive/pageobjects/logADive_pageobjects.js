var logADivepageObject = function () {
    //Menu Dropdown
    this.menuDropdown = element(by.id("userImageMobile"))
    //Log a dive Tab
    this.logdiveTab = $('[ng-click="vm.gotoLogADive($event)"]')
    //Related to select Recreational Dive from dropdown
    this.divetypeDropdown = element(by.id("recreational-training"))
    this.confined = element(by.id('divetype-confined'))
    this.openWater = element(by.id('divetype-openwater'))

    //cource 
    this.courseDropdown = element(by.id('trainingCourses'))
    this.trainigDiveTypeDropdown = element(by.id('trainingDiveType'))
    //Title
    this.Title = element(by.id('logtitle'))
    //Caption
    this.Caption = element(by.model('logdive.caption'))
    //Duration
    this.logDateTime = element(by.id('log-date-time'))
    this.hours = element(by.model('hours'))
    this.minutes = element(by.model('minutes'))
    this.timeType = $('[ng-click="minutes"]')
    this.timeDropdown = element(by.id('timein'))
    this.duration = element(by.model('diveDuration'))
    //Sightings and close it
    this.sightings = $('span[ng-click="open()"')
    this.chooseSightings = element.all(by.repeater('item in items'))
    this.DoneButton = element(by.buttonText('DONE'))
    this.sightingsClose = $('[ng-click="cancel()"]')
    //All related to waves
    this.waves = element(by.id('dive-waves'))
    this.smallWaves = element(by.id('dive-waves-small'))
    this.mediumWaves = element(by.id('dive-waves-medium'))
    this.largewaves = element(by.id('dive-waves-large'))
    //All related to surge
    this.surge = element(by.id('dive-surge'))
    this.lightSurge = element(by.id('dive-surge-light'))
    this.mediumSurge = element(by.id('dive-surge-medium'))
    this.strongSurge = element(by.id('dive-surge-strong'))
    //All related to current
    this.Current = element(by.id('dive-current'))
    this.lightCurrent = element(by.id('dive-current-light'))
    this.mediumCurent = element(by.id('dive-current-medium'))
    this.largeCurrent = element(by.id('dive-current-large'))
    //All related to exposure
    this.exposureNone = element(by.id('exposure-none'))
    this.exposureShorty = element(by.id('exposure-shorty'))
    this.exposureWetsuit = element(by.id('exposure-wetsuit'))
    this.exposureDrysuit = element(by.id('exposure-drysuit'))
    //All related to Gas
    this.gasAir = element(by.id('dive-gas-air'))
    this.gasEnriched = element(by.id('dive-gas-enriched'))
    this.gasTrimix = element(by.id('dive-gas-trimix'))
    this.gasRebreather = element(by.id('dive-gas-rebreather'))
    //Related to tank PSI or BAR
    this.tankPSI = element(by.id('tankPSI'))
    this.tankBAR = element(by.id('tankBAR'))
    this.startpsi = $('[ng-model="logdive.startpsi"]')
    this.endpsi = $('[ng-model="logdive.endpsi"]')
    //Gas Mixture
    this.oxygen = element(by.id('dive-mix-oxmix'))
    this.heleum = element(by.id('dive-mix-hemix'))
    //All related to Tank Material
    this.tank = element(by.id('dive-tank'))
    this.tankAluminum = element(by.id('dive-tank-aluminum'))
    this.tankSteel = element(by.id('dive-tank-steel'))
    this.tankOther = element(by.id('dive-tank-other'))
    //Participants and close
    this.participants = $('[ng-click="addBuddies()"]')
    this.participantsClose = $('[ng-click="cancel()"]')
    //Notes
    this.notes = element(by.id('dive-comments'))
    //All related to Privacy
    this.privacyDropdown = $('[ng-click="showSettings = !showSettings"]')
    this.public = $$('[ng-click="setCurrentSetting(setting)"]').get(0)
    this.onlyMe = $$('[ng-click="setCurrentSetting(setting)"]').get(1)
    this.followersOnly = $$('[ng-click="setCurrentSetting(setting)"]').get(2)
    //Publish Dive
    this.publish = element(by.id('publish-divelog-btn'))
    //Save draft
    this.saveDraft = element(by.id('draft-divelog-btn'))

    /**
     * @local
     * Function to perform click on (menuDropdown and logdiveTab).
     */
    this.openLogDive = function () {
        this.menuDropdown.click()
        browser.sleep(3000)
        this.logdiveTab.click()
    }

    /**
     * @local
     * Function for perform select diveType if(divetype is trainig then water type required) from drop down.	
     * @param{type,type} [var,var]- name of divetype available in dropdown list and water type.  
     */
    this.selectDiveType = function (diveTypeName, waterType) {
        this.divetypeDropdown.click()
        this.selectDive = element(by.linkText(diveTypeName)).click()
        if (diveTypeName == "Training") {
            if (waterType == "Confined") {
                this.confined.click()
            } else if (waterType == "OpenWater") {
                this.openWater.click()
            }
        }
    }

    /**
     * @local
     * Function for enter the title of dive.	
     * @param{type} [var]- name of divetype available in dropdown list and water type.  
     */
    this.enterTitle = function (title) {
        this.Title.sendKeys(title)
    }

    /**
     * @local
     * Function to perform select course type from dropdown list.	
     * @param{type} [var]- name of course type available in dropdown list.  
     */
    this.selectCourseType = function (courseName) {
        this.courseDropdown.click()
        thsi.selectCourse = elemment(by.linkText(courseName)).click()
    }
    /**
     * @local
     * Function to perform select training dive type from dropdown list.	
     * @param{type} [var]- name of divetype available in dropdown list.  
     */
    this.selectTrainingDiveType = function (diveType) {
        this.trainigDiveTypeDropdown.click()
        this.selectTrainingDive = element(by.linkText(diveType))
    }
    /**
     * @local
     * Function for write the caption of dive.	
     * @param{type} [var]- write dive message.  
     */
    this.writeCaption = function (captionMessage) {
        this.Caption.sendKeys(captionMessage)
    }
    /**
     * @local
     * Function for enter the date of dive.	
     * @param{type} [var]- enter the datetime in 12 March 2016 like.  
     */
    this.selectDateAndTime = function (datetime) {
        this.logDateTime.clear()
        this.logDateTime.sendKeys(datetime)
    }
    /**
     * @local
     * Function to enter dive time.	
     * @param{type} [var]- enter the datetime in 03:33 AM/PM format.  
     */
    this.selectTime = function (hourtime, minutetime, timetype) {
        this.timeDropdown.click()
        this.hours.sendKeys(hourtime)
        this.minutes.sendKeys(minutetime)
        if (timetype == "PM") {
            this.timeType.click()
        }
    }
    /**
     * @local
     * Function to enter duration time.	
     * @param{type} [var]- enter the datetime in 33 minutes format.  
     */
    this.enterDuration = function (durationtime) {
        this.duration.sendKeys(durationtime)
    }
    /**
     * @local
     * Function to enter maximum and average dive depth in meters.	
     * @param{type,var} [var,var]- enter the maximum and avetage depth.  
     */
    this.depth = function (maximumDepth, avgDepth) {
        var maximumDiveDepth_Slider = element(by.xpath('//*[@id="maximum-dive-depth"]/span[3]'));
        browser.actions().dragAndDrop(maximumDiveDepth_Slider, {
            x: maximumDepth,
            y: 0
        }).perform();
        browser.sleep(5000);

        var avgDiveDepth_Slider = element(by.xpath('//*[@id="avg-dive-depth"]/span[2]'));

        browser.actions().dragAndDrop(avgDiveDepth_Slider, {
            x: avgDepth,
            y: 0
        }).perform();
        browser.sleep(5000);
    }
    /**
     * @local
     * Function to choose sighting .	
     * @param{type,var} [var,var]- enter the sighting index number.  
     */
    this.sightingSelect = function (index) {
        this.sightings.click()
        this.chooseSightings.get(index).click()
        this.DoneButton.click()
    }
    /**
     * @local
     * Function to set temperature by draggin slider.	
     * @param{type,type,type} [var,var,var]- enter air_tempeture, surface_temperature, bottom_teperature.  
     */
    this.temperature = function (air_tempeture, surface_temperature, bottom_teperature) {
        var airTemperatureSlider = element(by.id('air-temparture'))
        browser.actions().dragAndDrop(airTemperatureSlider, {
            x: 0,
            y: air_tempeture
        }).perform()

        var surfaceTemperatureSlider = element(by.id('surface-water-temperature'))
        browser.actions().dragAndDrop(surfaceTemperatureSlider, {
            x: 0,
            y: surface_temperature
        }).perform()
        var bottomTemperatureslider = element(by.id('bottom-water-temperature'))
        browser.actions().dragAndDrop(bottomTemperatureslider, {
            x: 0,
            y: bottom_teperature
        }).perform()

    }
    /**
     * @local
     * Function to enter maximum dive visibility in water.	
     * @param{type} [var]- enter the maximum visibility.  
     */
    this.visibility = function (diveVisibility) {
        var slider = element(by.id('dive-visibility'))
        browser.actions().dragAndDrop(slider, {
            x: diveVisibility,
            y: 0
        }).perform()
    }
    /**
     * @local
     * Function to perform click on waves type.	
     * @param{type} [var]- enter the waves type name.  
     */
    this.wavesCheck = function (wavesType) {

        element(by.id('dive-waves'))
        if (wavesType == "smallWaves") {
            this.smallWaves.click()
        } else if (wavesType == "mediumWaves") {
            this.mediumWaves.click()
        } else if (wavesType == "largewaves") {
            this.largewaves.click()
        }
    }
    /**
     * @local
     * Function to perform click on surge type.	
     * @param{type} [var]- enter the surge type name.  
     */
    this.swellCheck = function (surgeType) {
        this.surge
        if (surgeType == "lightSurge") {
            this.lightSurge.click()
        } else if (surgeType == "mediumSurge") {
            this.mediumSurge.click()
        } else if (surgeType == "strongSurge") {
            this.strongSurge.click()
        }
    }
    /**
     * @local
     * Function to perform click on current type.	
     * @param{type} [var]- enter the current type name.  
     */
    this.currentCheck = function (currentType) {
        this.Current;
        if (currentType == "lightCurrent") {
            this.lightCurrent.click()
        } else if (currentType == "mediumCurent") {
            this.mediumCurent.click()
        } else if (currentType == "largeCurrent") {
            this.largeCurrent.click()
        }
    }
    /**
     * @local
     * Function to select exposer type.	
     * @param{type} [var]- enter exposer type name.  
     */
    this.exposure = function (exposerType) {
        if (exposerType == "exposureNone") {
            this.exposureNone.click()
        } else if (exposerType == "exposureShorty") {
            this.exposureShorty.click()
        } else if (exposerType == "exposureWetsuit") {
            this.exposureWetsuit.click()
        } else if (exposerType == "exposureDrysuit") {
            this.exposureDrysuit.click();
            var slider = element(by.xpath('//*[@id="dive-weight"]/span[2]'))
            browser.actions().dragAndDrop(slider, {
                x: 200,
                y: 0
            }).perform();
        }
    }
    /**
     * @local
     * Function to select gas type.	
     * @param{type} [var]- enter gas type name.  
     */
    this.gas = function (gasType) {
        this.gasAir.click()
        if (gasType == "gasEnriched") {
            this.gasEnriched.click()
        } else if (gasType == "gasTrimix") {
            this.gasTrimix.click()
        } else if (gasType == "gasRebreather") {
            this.gasRebreather.click()
        }


    }
    /**
     * @local
     * Function to select tank type and enter start and end pressure.	
     * @param{type,type,type} [var,var,var]- enter tank type name and start and end pressure.  
     */
    this.cylinder = function (tankType, start, end) {
        if (tankType == "tankPSI") {
            this.tankPSI.click()
            this.startpsi.sendKeys(start)
            this.endpsi.sendKeys(end)
        }
        if (tankType == "tankBAR") {
            this.tankBAR.click()
            this.startpsi.sendKeys(start)
            this.endpsi.sendKeys(end)
        }
        /**
         * @local
         * Function to click on tankMaterial tab .	
         * @param{type} [var]- enter the available option.  
         */
        this.tankMaterial = function (material) {
            this.tank.click()
            if (material == "tankAluminum") {
                this.tankAluminum.click()
            } else if (material == "tankBAR") {
                this.tankBAR.click()
            } else if (material == "tankOther") {
                this.tankOther.click()
            }
        }
    }
    /**
     * @local
     * Function to perform click on saveDraft button.	  
     */
    this.saveLog = function () {
        this.saveDraft.click()
    }

}
module.exports = logADivepageObject