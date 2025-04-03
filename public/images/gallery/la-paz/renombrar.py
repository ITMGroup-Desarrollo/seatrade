import os

def renombrar_archivos():
    # Obtener la ruta de la carpeta donde está este script
    carpeta = os.path.dirname(os.path.abspath(__file__))

    # Obtener la lista de archivos .webp en la carpeta
    archivos = [f for f in os.listdir(carpeta) if f.lower().endswith('.webp')]
    
    # Ordenar los archivos alfabéticamente para mantener un orden predecible
    archivos.sort()

    # Renombrar cada archivo en secuencia
    for i, archivo in enumerate(archivos, start=1):
        nuevo_nombre = f"{i}.webp"
        ruta_actual = os.path.join(carpeta, archivo)
        nueva_ruta = os.path.join(carpeta, nuevo_nombre)
        
        # Evitar sobrescribir archivos existentes
        if os.path.exists(nueva_ruta):
            print(f"❌ No se pudo renombrar {archivo}, {nuevo_nombre} ya existe.")
        else:
            os.rename(ruta_actual, nueva_ruta)
            print(f"✅ {archivo} → {nuevo_nombre}")

# Ejecutar la función
renombrar_archivos()
