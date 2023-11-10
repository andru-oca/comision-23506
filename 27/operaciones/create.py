from .read import read_user

def create_user(nombre:str,dni:int,edad:int , db_user:list=None):
    
    """
    info:
        La función create_user() crea un usuario nuevo y lo agrega a una base de datos de usuarios.

    params:
        nombre: El nombre del usuario.
        dni: El número de documento de identidad del usuario.
        edad: La edad del usuario.
        db_user: Una lista de usuarios existente. Si es None, se creará una nueva lista.
        
    return: None

    """

    user:dict = {
        "dni":dni,
        "nombre":nombre,
        "edad":edad,
    }

    if db_user is None:
        print("Ojo, que no tengo base de datos")
        return

    db_user.append(user)
    print(user)
    read_user(dni,db_user)
    
    return 