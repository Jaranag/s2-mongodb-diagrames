CREATE DATABASE 'pizzeria2'

use('pizzeria2');db.createCollection('Botigues',{ validator: { $jsonSchema: {
  "bsonType": "object",
  "required": [
    "localitat",
    "provincia"
  ],
  "properties": {
    "Adreça": {
      "bsonType": "object",
      "properties": {
        "num_carrer": {
          "bsonType": "string"
        },
        "carrer": {
          "bsonType": "string"
        },
        "codi_postal": {
          "bsonType": "int"
        }
      }
    },
    "empleats": {
      "bsonType": "array",
      "items": {}
    },
    "localitat": {
      "bsonType": "string"
    },
    "provincia": {
      "bsonType": "string"
    }
  }
} }});

use('pizzeria2');db.createCollection('Clients',{ validator: { $jsonSchema: {
  "bsonType": "object",
  "required": [
    "Nom",
    "cognom1"
  ],
  "properties": {
    "cognom2": {
      "bsonType": "string"
    },
    "cognom1": {
      "bsonType": "string"
    },
    "Adreça": {
      "bsonType": "object",
      "properties": {
        "carrer": {
          "bsonType": "string"
        },
        "codi_postal": {
          "bsonType": "int"
        },
        "pis": {
          "bsonType": "string"
        },
        "porta": {
          "bsonType": "string"
        }
      }
    },
    "província": {
      "bsonType": "string"
    },
    "localitat": {
      "bsonType": "string"
    },
    "Nom": {
      "bsonType": "string"
    },
    "tlf": {
      "bsonType": "int"
    }
  }
} }});

use('pizzeria2');db.createCollection('Comandes',{ validator: { $jsonSchema: {
  "bsonType": "object",
  "required": [
    "data",
    "tipus_comanda",
    "preu_total"
  ],
  "properties": {
    "data": {
      "bsonType": "timestamp"
    },
    "id_botiga": {
      "bsonType": "objectId"
    },
    "id_client": {
      "bsonType": "objectId"
    },
    "id_productes": {
      "bsonType": "array",
      "items": {}
    },
    "id_repartidor": {
      "bsonType": "objectId"
    },
    "preu_total": {
      "bsonType": "double"
    },
    "tipus_comanda": {
      "enum": [
        "a_domicili",
        "recollir"
      ]
    }
  }
} }});

use('pizzeria2');db.createCollection('Empleats',{ validator: { $jsonSchema: {
  "bsonType": "object",
  "required": [
    "nom",
    "cognom1"
  ],
  "properties": {
    "cognom2": {
      "bsonType": "string"
    },
    "cognom1": {
      "bsonType": "string"
    },
    "id_botiga": {
      "bsonType": "objectId"
    },
    "tipus_empleat": {
      "enum": [
        "cuiner",
        "repartidor"
      ]
    },
    "nom": {
      "bsonType": "string"
    },
    "tlf": {
      "bsonType": "int"
    }
  }
} }});

use('pizzeria2');db.createCollection('Productes',{ validator: { $jsonSchema: {
  "bsonType": "object",
  "required": [
    "tipus_producte",
    "nom"
  ],
  "properties": {
    "tipus_producte": {
      "enum": [
        "pizza",
        "haburguesa",
        "beguda"
      ]
    },
    "preu": {
      "bsonType": "double"
    },
    "descrpció": {
      "bsonType": "string"
    },
    "tipus_pizza": {
      "bsonType": "string"
    },
    "nom": {
      "bsonType": "string"
    },
    "imatge": {
      "bsonType": "string"
    }
  }
} }});
