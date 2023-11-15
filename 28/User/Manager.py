from Controllers import get_user as obtener_usuario
from Controllers import create_user
from .Usuario    import Usuario

class Manager:
    def __init__(self,**kwargs)->None:
        self.db = kwargs.get("db", [])
    
    def show_db(self)->None:
        for user in self.db:
            print(user)

    def insert_user(self,user:Usuario=None):
        create_user(self,user)

    def get_user(self,dni:str):
        return obtener_usuario(self, dni = dni )


    def update_user():
        pass
    def delete_user():
        pass