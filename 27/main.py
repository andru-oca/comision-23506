# Sector de importacion de librerias
from generador import generar_usuarios
from operaciones.create import create_user
from operaciones.read   import read_user
from operaciones.update import update_user
from operaciones.delete import delete_user

## --- Funciones 
def greeting()->None:
    print("Hola mundo desde codo a codo")

print("Corro mi primera funcion")
greeting()

usuarios_venta = generar_usuarios(20)
usuarios_dev = generar_usuarios()

print(usuarios_venta)

# CRUD   | ABM
# --------------

"""

get_orden_del_crud()

{
    create_user ?
    read_user ?
    update_user ?
    delete_user?
}

deseas_hacer_otra_operacion?   -- 


"""

def main():
    opcion: str = input(f"""
          Bienvenido
          Que operacion desea hacer?
            - a => crear
            - b => leer
            - c => actualizar
            - d => borrar

          """)



    if opcion == "a":
        nombre=input("ingrese nombre\n")
        edad=int(input("ingrese edad\n"))
        dni=int(input("ingrese dni\n"))
        create_user(nombre,dni,edad, usuarios_venta)
        return
    
    if opcion == "b":
        dni=int(input("ingrese dni\n"))
        read_user(dni,usuarios_venta)
        return
    
    if opcion == "c":
        dni=int(input("ingrese dni\n"))
        update_user(dni,usuarios_venta)
        return 
    
    if opcion == "d":
        dni=int(input("ingrese dni\n"))
        delete_user(dni,usuarios_venta)
        return 
    

main()

















