using System;

namespace ahorcado
{
    class Program
    {
        static void Main(string[] args)
        {
            int intentos = 0;
            int Ganar = 0;
            string palabra = palabraAleatoria();
            char[] palabraChar = palabra.ToCharArray();
            char[] cantLetras = espacios(palabra);
            string letraingresa = string.Empty;
            char letraingresachar = ' ';

            bool gano = false;

            while (gano == false)
            {
                int SoloUna = 0;
                int contar = 0;
                int repetir = 0;

                while (SoloUna == 0)
                {
                    NumDeLetras(cantLetras);//palabra a adividar

                    Console.WriteLine("\nintentos fallidos: {0}", intentos);
                    Console.Write("\ningresa una letra: ");
                    letraingresa = Console.ReadLine();
                    if (comprobar(letraingresa))
                    {
                        letraingresachar = Convert.ToChar(letraingresa);
                        SoloUna++;
                    }
                    else
                    {
                        Console.Clear();
                        Console.Write("solo una letra");
                        Console.ReadKey();
                        Console.Clear();
                    }
                }
                for (int i = 0; i < cantLetras.Length; i++)//sustituir
                {
                    if (cantLetras[i] == letraingresachar)
                    {
                        if (repetir == 0)
                        {
                            Console.Clear();
                            Console.WriteLine("letra ya encontrada");
                            Console.ReadKey();
                            repetir++;
                        }
                        contar++;
                    }
                    else
                    {
                        if (letraingresachar == palabraChar[i])//cambiar
                        {
                            cantLetras[i] = letraingresachar;
                            contar++;
                            Ganar++;
                        }
                    }
                }
                if (contar == 0)
                {
                    intentos++;
                }
                if (intentos == 5)
                {
                    Console.Clear();
                    Console.WriteLine("\nPERDISTE");
                    Console.ReadKey();
                    break;
                }
                if (Ganar == palabraChar.Length)
                {
                    gano = true;
                }
                Console.Clear();

            }
            fin(palabra, intentos, gano);//final del juego
        }
        static string palabraAleatoria()
        {
            Random rdn = new Random();
            int p = rdn.Next(0, 9);

            string[] palabras = { "anime", "pastel", "musica", "chetos", "cine", "bleach", "lentes", "series", "cafe", "runers" };
            string encontrada;

            encontrada = palabras[p];
            return encontrada;
        }
        static char[] espacios(string palabra)
        {
            char[] cantLetras = palabra.ToCharArray();

            for (int a = 0; a < palabra.Length; a++)//sustituir
                cantLetras[a] = '_';

            return cantLetras;
        }
        static void NumDeLetras(char[] cantLetras)
        {
            Console.WriteLine();

            for (int i = 0; i < cantLetras.Length; i++)//espacio en los guiones
                Console.Write(cantLetras[i] + " ");

            Console.WriteLine();
        }
        static bool comprobar(string letra) //solo una
        {
            bool UnaLetra = false;

            if (letra.Length == 1)
                UnaLetra = true;

            return UnaLetra;
        }
        static void fin(string palabra, int intentos, bool gano)
        {
            if (gano == true)
            {
                Console.WriteLine();
                Console.WriteLine("GANASTE");
                Console.WriteLine();
                Console.WriteLine("La palabra era: {0}", palabra.ToUpper());
                Console.ReadKey();
            }
            else
            {
                Console.Clear();
                Console.WriteLine("La palabra era: {0}", palabra.ToUpper());
                Console.ReadKey();
            }
        }
    }
}
