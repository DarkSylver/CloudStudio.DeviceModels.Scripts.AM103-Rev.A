function parseUplink(device, payload)
{
    var parsed = payload.asParsedObject();
    env.log(parsed);    

    // Store humidity
    var e = device.endpoints.byType(endpointType.humiditySensor);
    if (e != null)
        e.updateHumiditySensorStatus(parsed.humidity);

    // Store temperature
    e = device.endpoints.byType(endpointType.temperatureSensor);
    if (e != null)
        e.updateTemperatureSensorStatus(parsed.temperature);

    // Store CO2
    e = device.endpoints.byType(endpointType.ppmConcentrationSensor, ppmConcentrationSensorSubType.carbonDioxide);
    if (e != null)
        e.updatePpmConcentrationSensorStatus(parsed.co2);
       
}