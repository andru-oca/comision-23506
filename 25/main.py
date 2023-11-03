# CONDICIONAL IF - ELSE - ELIF
# SOFTWARE QUE ME PERMITA VALIDAR UN PASSWORD  


from user.db import PASSWORD , USUARIO

"""
usuario = input("INGRESE EL USERNAME:\n")
pwd = input("INGRESE SU PASSWORD:\n")

if usuario == USUARIO :
    if pwd.isdigit():
        pwd = int(pwd)
        if pwd == PASSWORD:
            print(f"Bienvenido {usuario}")
        else:
            print("No es correcto el pass")
    elif pwd == PASSWORD:
            print(f"Bienvenido {usuario}")
    else:
        print("No es correcto el pass")
else:
    print("Usuario no reconocido")
"""


# Vamos a hacer un validador de Usuario

"""
flag:bool = True

while flag:
    username = input("Ingrese su username:\n")

    if username == USUARIO:
        print("El usuario es válido")
        flag = not flag
        print(flag)
else:
    print("Cerro la sesion con la base de datos")

"""

texto = "hola mundo desde codo a codo"

# for i in range( len(texto) ):
#     print(texto[i])


# for char in texto:
#     print(char)


# import sqlite3

# con = sqlite3.connect("libreria_23506.db")
# cur = con.cursor()

# cur.execute("""
#         CREATE TABLE 
#             USER(
#                 id INT,
#                 user VARCHAR,
#                 password VARCHAR
#             )
#             """)

# for userId in range(3):
#     user_name   =   input("Ingrese nombre usuario:\n")
#     password    =   input("Ingrese su contraseña:\n")

#     insertQuery = f"""

#     INSERT INTO USER
#     VALUES
#     ( {userId} , '{user_name}' , '{password}' )
#     """

#     cur.execute(insertQuery)

#     print(f"La carga del usuario: {user_name} fue exitosa")

# else:
#     con.commit()
#     res = cur.execute("SELECT * FROM USER")
#     print(res.fetchall())
#     cur.close()
#     print("Conexión cerrada")


# imprime los numeros pares

# for i in  range(0,100,2):
#     print(i)

for year in range(2000,2100,1):
    """
    DocString
    Esta iteracion permite:
        Validar por doble condicion si es
        un año bisiesto
    """

    primera_condicion = (year % 400 == 0)
    segunda_condicion = (year % 4 == 0 ) and (year%100 != 0)

    if primera_condicion or segunda_condicion:
        print(f"El año: {year} es bisiesto")