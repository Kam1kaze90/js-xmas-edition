function probarValidarNombre() {
  console.assert(
      validarNombre('') === 'Este campo debe tener al menos 1 caracter',
      'Validar nombre no validó que el nombre no sea vacío',
  );

  console.assert(
      validarNombre(
          '111111111111111111111111111111111111111111111111111111111111111111111111111111111111111') ===
      'Este campo debe tener menos de 50 caracteres',
      'Validar nombre no validó que el nombre sea menor a 50 caracteres',
  );

  console.assert(
      validarNombre("Jon1tan") === "El campo solo acepta letras",
      "Validar nombre no validó que nombre solo contenga letras",
  );
}



function probarValidarCiudad(){
    console.assert(
        validarCiudad('') === "Debe completar ciudad",
        "Validar cuidad no validó que la cuidad sea vacia",
    );

    console.assert(
        validarCiudad("La Pampa") === "",
        "Validar ciudad no funcionó con un nombre de cuidad válido"
    );
};

function probarValidarDescripcionRegalo(){
    console.assert(
        validarDescripcionRegalo("") === "Debe completar descripcion regalo",
        "Validar descripcion regalo no validó que descripcion regalo sea vacia" 
    );

    console.assert(
        validarDescripcionRegalo("asadaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaasdasdasdasds") === "La descripción es muy larga",
        "Validar descripción regalo no validó que el campo sea muy largo"
    );

    console.assert(
        validarDescripcionRegalo("Muylindo") === "",
        "Validar descripción regalo no funcionó con una descripción válida"
    );

    console.assert(
        validarDescripcionRegalo("Hola, 123") === "El campo descripcion solo puede tener numeros y letras",
        "Validar descripción regalo no funcionó para letras y numeros"
    );
}

probarValidarNombre();
probarValidarCiudad();
probarValidarDescripcionRegalo()