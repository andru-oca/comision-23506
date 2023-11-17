class SuperTiros:
    def __init__(self,tiros):
        self.tiros=tiros

    def nombre_tiro(self):
        nombre_tiro:str = input("ingrese el nombre del tiro:\n")
        self.nombre_tiro= nombre_tiro
        print(f"{self.nombre} tiene el tiro: {self.nombre_tiro}")