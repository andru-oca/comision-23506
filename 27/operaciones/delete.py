from .read import read_user


def delete_user(dni:int,db_user:list=None):
    if db_user is None:
        print("Ojo, que no tengo base de datos")
        return

    user:dict = read_user(dni,db_user)

    if len(user) == 0:
        print("No existe el usuario")
        return

    for index, u in  enumerate(db_user):
        if u["dni"] == user["dni"] :
            db_user.pop(index)

    return

    


    