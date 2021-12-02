/******************************************************************************

                            Online C# Compiler.
                Code, Compile, Run and Debug C# program online.
Write your code in this editor and press "Run" button to execute it.

*******************************************************************************/

using System;
class HelloWorld {
  static void Main() {
    Console.WriteLine("Hello World");
  }
}
namespace Calculator
{
    class Program
    {
        static void Main(string[] args)
        {
            // decarar variables.
            int num1 = 0; int num2 = 0;

            Console.WriteLine("calculadora C#\r");
            Console.WriteLine("------------------------\n");

            // ingresar primer nuero 
            Console.WriteLine("escriba primer numero, dar Enter");
            num1 = Convert.ToInt32(Console.ReadLine());

            // ingresar segundo numero 
            Console.WriteLine("escriba segundo numero, dar enter");
            num2 = Convert.ToInt32(Console.ReadLine());

            // opcion de calculo
            Console.WriteLine("opciones:");
            Console.WriteLine("\ts - suma");
            Console.WriteLine("\tr - resta");
            Console.WriteLine("\tm - multiplicacion");
            Console.WriteLine("\td - division");
            Console.Write("¿que opcion requiere? ");

            // casos
            switch (Console.ReadLine())
            {
                case "s":
                    Console.WriteLine($"resultado: {num1} + {num2} = " + (num1 + num2));
                    break;
                case "r":
                    Console.WriteLine($"resultado: {num1} - {num2} = " + (num1 - num2));
                    break;
                case "m":
                    Console.WriteLine($"resultado: {num1} * {num2} = " + (num1 * num2));
                    break;
                case "d":
                    Console.WriteLine($"resultado: {num1} / {num2} = " + (num1 / num2));
                    break;
            }
            // terminar.
            Console.Write("presione de nuevo enter para cerrar el programa.");
            Console.ReadKey();
        }
    }
}
