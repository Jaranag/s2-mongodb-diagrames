CREATE DATABASE 'optica2'

use('optica2');db.createCollection('Clients',{ validator: { $jsonSchema: {
  "bsonType": "object",
  "required": [
    "nom",
    "data_registre"
  ],
  "properties": {
    "c_postal": {
      "bsonType": "int"
    },
    "data_registre": {
      "bsonType": "timestamp"
    },
    "nom": {
      "bsonType": "string"
    },
    "email": {
      "bsonType": "string"
    },
    "recomanat": {
      "bsonType": "objectId"
    },
    "tlf": {
      "bsonType": "int"
    }
  }
} }});

use('optica2');db.createCollection('Proveïdor',{ validator: { $jsonSchema: {
  "bsonType": "object",
  "required": [
    "nom",
    "Adreça",
    "tlf",
    "nif/nie"
  ],
  "properties": {
    "Adreça": {
      "bsonType": "object",
      "required": [
        "carrer",
        "ciutat",
        "c_postal"
      ],
      "properties": {
        "c_postal": {
          "bsonType": "int"
        },
        "numero": {
          "bsonType": "string"
        },
        "ciutat": {
          "bsonType": "string"
        },
        "carrer": {
          "bsonType": "string"
        },
        "pis": {
          "bsonType": "string"
        },
        "porta": {
          "bsonType": "string"
        },
        "pais": {
          "bsonType": "string"
        }
      }
    },
    "nif/nie": {
      "bsonType": "string"
    },
    "nom": {
      "bsonType": "string"
    },
    "tlf": {
      "bsonType": "int"
    }
  }
} }});

use('optica2');db.createCollection('Ulleres',{ validator: { $jsonSchema: {
  "bsonType": "object",
  "properties": {
    "color_esq": {
      "bsonType": "string"
    },
    "marca": {
      "bsonType": "string"
    },
    "gra_dre": {
      "bsonType": "double"
    },
    "color_montura": {
      "bsonType": "string"
    },
    "preu": {
      "bsonType": "double"
    },
    "gra_esq": {
      "bsonType": "double"
    },
    "tipus_montura": {
      "enum": [
        "metàl·lica",
        "pasta",
        "flotant"
      ]
    },
    "color_dre": {
      "bsonType": "string"
    },
    "id_proveidor": {
      "bsonType": "int"
    }
  }
} }});

use('optica2');db.createCollection('Ventes',{ validator: { $jsonSchema: {
  "bsonType": "object",
  "required": [
    "ulleres",
    "id_client",
    "id_empleat"
  ],
  "properties": {
    "ulleres": {
      "bsonType": "array",
      "items": {}
    },
    "id_client": {
      "bsonType": "objectId"
    },
    "data_venta": {
      "bsonType": "timestamp"
    },
    "id_empleat": {
      "bsonType": "objectId"
    }
  }
} }});
