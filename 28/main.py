from User import Usuario
from User import Manager


def main():
    manager_local = Manager()

    german:Usuario = Usuario(        
        nombre = "german"
    ,   dni = "0891728931")


    manager_local.get_user("761278361")

    manager_local.insert_user()
    manager_local.insert_user(german)

    manager_local.show_db()


if __name__ == '__main__':
    main()