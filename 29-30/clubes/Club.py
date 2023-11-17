class ListaClub:
    # Se agrega como composicion
    def __init__(self,clubes=[]):
        self.clubes:list[Club] = clubes

    def show_clubes(self):
        for club in self.clubes:
            print(club)

    def insert_club(self,club):
        self.clubes.append(club)

class Club:
    ## se agrega a la supra como asociacion
    def __init__(self,nombre:str,mascota:str):
        self.nombre = nombre
        self.mascota = mascota
    
    def __str__(self) -> str:
        return f"Soy el club {self.nombre} y mi mascota es {self.mascota}"
