function getConfiguration(config) {
  config.addressLabel = { en: "DevEUI", es: "DevEUI" };
}

function getEndpoints(deviceAddress, endpoints) {
  var em = endpoints.addEndpoint(
    "1",
    "Battery Level",
    endpointType.genericSensor
  );
  em.variableTypeId = 1076;

  endpoints.addEndpoint(
    "2",
    "Temperature sensor",
    endpointType.temperatureSensor
  );

  endpoints.addEndpoint("3", "Humidity sensor", endpointType.humiditySensor);

  endpoints.addEndpoint(
    "4",
    "CO₂ sensor",
    endpointType.ppmConcentrationSensor,
    ppmConcentrationSensorSubType.carbonDioxide
  );
}

function validateDeviceAddress(address, result) {
  address = address.toLowerCase();
  result.ok = true;
  var validchars = [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
  ];
  for (var i = 0; i < address.length; i++) {
    if (!validchars.includes(address.charAt(i))) {
      result.ok = false;
      break;
    }
  }
  if (!result.ok)
    result.errorMessage = {
      en: "The address must be 16 characters long and only have hexadecimal characters",
      es: "La dirección debe tener sólo caracteres hexadecimales",
    };
}

function updateDeviceUIRules(device, rules) {
  rules.canCreateEndpoints = true;
  //No fueron especificadas reglas para los dispositivos
}

function updateEndpointUIRules(endpoint, rules) {
  rules.canDelete = true;
  //No fueron especificadas reglas para los endpoints
}
