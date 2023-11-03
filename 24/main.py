# COMO hacer un formulario

# nombre_string = input("Ingrese su nombre")

# print("Ola k ase?" + nombre_string)

# formulario de usuarios

nombre    = input("ingrese su nombre  : ")
apellido  = input("ingrese su apellido: ")
email  = input("ingrese su email: ")
password  = input("ingrese su password: ")
dob  = input("ingrese su fecha de nacimiento: ")

usuario = {
    "nombre" : nombre,
    "apellido" : apellido,
    "email" : email,
    "password" : password,
    "dob " : dob    
}

valor_devolucion = f"""

    Mi nombre completo es : {nombre} {apellido}

    mi email : {email}
    mi password : {password:_^20}

    Mi fecha de nacimiento es : {dob}

"""

print(valor_devolucion)

with open("respuesta.txt","w",encoding = "utf8") as f:
    f.write(valor_devolucion)




