from .read import read_user
from .create import create_user

def update_user(dni:int, db_user:list):
    user = read_user(dni,db_user)

    if user == None:
        return

    if len(user) == 0:
        print("El usuario no existe, procedemos a crearlo")
        nombre:str = input("ingresa el nombre\n")
        edad:int = input("ingrese la edad\n")
        create_user(nombre,dni,edad,db_user)
        return

    key = input("Que valor vas a modificar\n Valores válidos: nombre o edad")
    value = input("ingresa el valor nuevo\n")

    user[key] = value

    for index,user in enumerate(db_user):

        if user["dni"] == dni:
            db_user[index] = user
        

    print("Gracias por modificar al usuario")



