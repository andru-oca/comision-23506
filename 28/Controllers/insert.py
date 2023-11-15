from User import Usuario

def create_user(cls,user:Usuario=None):
    
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
    if user:
        cls.db.append(user)
        return

    nombre:str = input("ingrese el nombre del usuario:\t")
    dni:str = input("ingrese el dni:\t")

    user:Usuario = Usuario(
        nombre =nombre
    ,   dni = dni
    )

    cls.db.append(user)
    print(user)
    
    return 