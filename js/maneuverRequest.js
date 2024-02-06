$( document ).ready(function() 
{
    /**
     * Pseudo DB
     * 
     */
    var testDB = 
    [
        {   
            "object":"tracto",
            "tracto_PLATES":"ZXC",
            "tracto_available":0
        },
        {   
            "object":"tracto",
            "tracto_PLATES":"ASD",
            "tracto_available":1
        },
        {   
            "object":"chassis",
            "chassis_ID":"chassis_A",
            "chassis_size":40,
            "chassis_available":0
        },
        {
            "object":"chassis",
            "chassis_ID":"chassis_B",
            "chassis_size":40,
            "chassis_available":0
        },
        {
            "object":"chassis",
            "chassis_ID":"chassis_C",
            "chassis_size":40,
            "chassis_available":1
        },
        {
            "object":"dolly",
            "dolly_ID":"dolly_A",
            "dolly_available":1
        },
        {   
            "object":"dolly",
            "dolly_ID":"dolly_B",
            "dolly_available":0
        }

    ]
        
    //console.log(testDB)
    console.log("DATABASE LOADED...!")





    var maneuverType = "NOT SELECTED"
    $("#maneuver_type_select").change(function()
    {
        maneuverType = $("#maneuver_type_select").val().trim()
	
        if(maneuverType ==="NOT SELECTED")
        {
            console.log("NO MANEUVER SELECTED: "+maneuverType)
        }else
        {
            console.log("SELECTED MANEUVER: "+maneuverType+"\nEXECUTE AJAX...")


            /**Simulate DB process */
            //console.log(testDB.length)
            
            /**Maneuver  */
            var requiredTractoNumber    = 0
            var requiredChassisNumber   = 0
            var requiredDollyNumber     = 0

            switch (maneuverType) 
            {
                case "FULL":
                    requiredTractoNumber    = 1
                    requiredChassisNumber   = 2
                    requiredDollyNumber     = 1   
                    
                    
                break;

                case "SINGLE":
                    requiredTractoNumber    = 1
                    requiredChassisNumber   = 1
                    requiredDollyNumber     = 0            
                break;
            
                default:
                break;
            }

            var availableTractos        = 0
            var availableChassises      = 0
            var availableDollys         = 0

            for (let index = 0; index < testDB.length; index++) 
            {
                //console.log(testDB[index])
    
                if (testDB[index].object === "tracto" && testDB[index].tracto_available === 1) 
                {
                    availableTractos++
                }

                if (testDB[index].object === "chassis" && testDB[index].chassis_available === 1) 
                {
                    availableChassises++
                }

                if (testDB[index].object === "dolly" && testDB[index].dolly_available === 1) 
                {
                    availableDollys++
                }

            }

            console.log("REQUIRED\tAVAILABLE")
            console.log(requiredTractoNumber+"\t\t\t"+availableTractos)
            console.log(requiredChassisNumber+"\t\t\t"+availableChassises)
            console.log(requiredDollyNumber+"\t\t\t"+availableDollys)

            switch (maneuverType) 
            {
                case "FULL":
                    availableTractos >= requiredTractoNumber & availableChassises >= requiredChassisNumber & availableDollys >= requiredDollyNumber ?
                    console.log(maneuverType+" - ENOUGH EQUIPMENT FOR MANEUVER...!")
                    :
                    console.log(maneuverType+" - NOT ENOUGH EQUIPMENT FOR MANEUVER...!")
                break;

                case "SINGLE":
                    availableTractos >= requiredTractoNumber & availableChassises >= requiredChassisNumber & availableDollys >= requiredDollyNumber ?
                    console.log(maneuverType+" - ENOUGH EQUIPMENT FOR MANEUVER...!")
                    :
                    console.log(maneuverType+" - NOT ENOUGH EQUIPMENT FOR MANEUVER...!")
                break;
            
                default:
                break;
            }
        }
        
    })
    



    var maneuverSize = "NOT SELECTED"
    $("#maneuver_size_select").change(function()
    {
        maneuverSize = $("#maneuver_size_select").val().trim() 
        console.log(maneuverSize)

    })



    var manualDateSelection = "NOT SET"

    document.getElementById("maneuver_date").addEventListener("change", function() 
    {
        manualDateSelection = this.value
        console.log(manualDateSelection)

        var objectDate = new Date(manualDateSelection)
        var day = objectDate.getDate()
        console.log(day)

        var month = objectDate.getMonth()
        console.log(month + 1)

        var year = objectDate.getFullYear()
        console.log(year)

        var hour = objectDate.getHours();
        console.log(hour)

        var minutes = objectDate.getMinutes();
        console.log(minutes)
        
        var seconds = objectDate.getSeconds();
        console.log(seconds)

        
       
    });




    $("#form_button").click(function()
    {
       
        console.log
        (
            maneuverType+"\n"+
            maneuverSize+"\n"+
            manualDateSelection+"\n"
        )

        maneuverType === "NOT SELECTED" || maneuverSize === "NOT SELECTED" || manualDateSelection === "NOT SET"?
        console.log("Cannot make the request, fields are missing...!")
        :
        console.log("Request can be executed...!")


    })


})