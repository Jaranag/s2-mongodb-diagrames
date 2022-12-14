
use('Optica');db.createCollection('Clients',{ validator: { $jsonSchema: {
  "bsonType": "object",
  "required": [
    "Nom",
    "Codi Postal",
    "TLF",
    "Correu Electrònic",
    "Data_registre",
    "Client referència"
  ],
  "properties": {
    "Correu Electrònic": {
      "bsonType": "string"
    },
    "Client referència": {
      "bsonType": "objectId"
    },
    "Codi Postal": {
      "bsonType": "int"
    },
    "Nom": {
      "bsonType": "string"
    },
    "Data_registre": {
      "bsonType": "timestamp"
    },
    "TLF": {
      "bsonType": "int"
    }
  }
} }});

use('Optica');db.createCollection('Empleats',{ validator: { $jsonSchema: {
  "bsonType": "object",
  "required": [
    "Cognom1",
    "Nom"
  ],
  "properties": {
    "Cognom1": {
      "bsonType": "string"
    },
    "Cognom2": {
      "bsonType": "string"
    },
    "Nom": {
      "bsonType": "string"
    }
  }
} }});

use('Optica');db.createCollection('Marques',{ validator: { $jsonSchema: {
  "bsonType": "object",
  "required": [
    "Nom",
    "Id_Proveïdor"
  ],
  "properties": {
    "Id_Proveïdor": {
      "bsonType": "objectId"
    },
    "Nom": {
      "bsonType": "string"
    }
  }
} }});

use('Optica');db.createCollection('Montures',{ validator: { $jsonSchema: {
  "bsonType": "object",
  "required": [
    "Tipus Montura"
  ],
  "properties": {
    "Tipus Montura": {
      "bsonType": "string"
    }
  }
} }});

use('Optica');db.createCollection('Proveidors',{ validator: { $jsonSchema: {
  "bsonType": "object",
  "required": [
    "Nom",
    "TLF",
    "NIF",
    "Id_Adreça"
  ],
  "properties": {
    "NIF": {
      "bsonType": "string"
    },
    "FAX": {
      "bsonType": "int"
    },
    "Nom": {
      "bsonType": "string"
    },
    "Id_Adreça": {
      "bsonType": "objectId"
    },
    "TLF": {
      "bsonType": "int"
    }
  }
} }});

use('Optica');db.createCollection('Proveidors_Adreçes',{ validator: { $jsonSchema: {
  "bsonType": "object",
  "required": [
    "Carrer",
    "Num_Carrer",
    "Ciutat"
  ],
  "properties": {
    "Carrer": {
      "bsonType": "string"
    },
    "Pis": {
      "bsonType": "int"
    },
    "Porta": {
      "bsonType": "int"
    },
    "Ciutat": {
      "bsonType": "string"
    },
    "Num_Carrer": {
      "bsonType": "int"
    }
  }
} }});

use('Optica');db.createCollection('Ulleres',{ validator: { $jsonSchema: {
  "bsonType": "object",
  "required": [
    "Id_Marca",
    "Id_Montura",
    "Color Montura",
    "Preu"
  ],
  "properties": {
    "Graduació_ESQ": {
      "bsonType": "double"
    },
    "Id_Montura": {
      "bsonType": "objectId"
    },
    "Color_DRE": {
      "bsonType": "string"
    },
    "Id_Marca": {
      "bsonType": "objectId"
    },
    "Preu": {
      "bsonType": "double"
    },
    "Color Montura": {
      "bsonType": "string"
    },
    "Graduació_DRE": {
      "bsonType": "double"
    },
    "Color_ESQ": {
      "bsonType": "string"
    }
  }
} }});

use('Optica');db.createCollection('Ventes',{ validator: { $jsonSchema: {
  "bsonType": "object",
  "required": [
    "Data",
    "Id_Client",
    "Id_Empleat",
    "Id_Ullera"
  ],
  "properties": {
    "Id_Empleat": {
      "bsonType": "objectId"
    },
    "Data": {
      "bsonType": "timestamp"
    },
    "Id_Ullera": {
      "bsonType": "objectId"
    },
    "Id_Client": {
      "bsonType": "objectId"
    }
  }
} }});
