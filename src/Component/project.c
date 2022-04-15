#include <stdio.h>
#include<stdlib.h>  
int Shahin=0, Lubaba=0, Joy=0, Johir=0;
void electionResult()
{
    
    int wonByVote;
    if (Shahin > Lubaba && Shahin > Joy && Shahin > Johir)
    {
        printf("\n***Shahin won the election***\n\n");
        printf("Total vote of Shahin : %d\n",Shahin);
        wonByVote=Shahin-Lubaba;
        printf("Shahin won by %d votes to Lubaba\n",wonByVote);
        wonByVote=Shahin-Joy;
        printf("Shahin won by %d votes to Joy\n",wonByVote);
        wonByVote=Shahin-Johir;
        printf("Shahin won by %d votes to Johir\n",wonByVote);
    }
    else if (Lubaba > Joy && Lubaba > Johir)
    {
        printf("\n***Lubaba won the election***\n\n");
        printf("Total vote of Lubaba : %d\n",Lubaba);
        wonByVote=Lubaba-Shahin;
        printf("Lubaba won by %d votes to Shahin\n",wonByVote);
        wonByVote=Lubaba-Joy;
        printf("Lubaba won by %d votes to Joy\n",wonByVote);
        wonByVote=Lubaba-Johir;
        printf("Lubaba won by %d votes to Johir\n",wonByVote);
    }
    else if (Joy > Johir)
    {
        printf("\n***Joy won the election***\n\n");
        printf("Total vote of Joy : %d\n",Joy);
        wonByVote=Joy-Lubaba;
        printf("Joy won by %d votes to Lubaba\n",wonByVote);
        wonByVote=Joy-Shahin;
        printf("Joy won by %d votes to Shahin\n",wonByVote);
        wonByVote=Joy-Johir;
        printf("Joy won by %d votes to Johir\n",wonByVote);
    }
    else if(Shahin == Lubaba && Shahin == Joy && Shahin == Johir)
    {
        printf("\nNo one won the election\n\n");
        printf("            Shahin---Lubaba---Joy---Johir\n");
        printf("Total Vote   %d       %d        %d     %d\n",Shahin,Lubaba,Joy,Johir);
    }
    else
    {
        printf("\n***Johir won the election***\n\n");
        printf("Total vote of Johir : %d\n",Johir);
        wonByVote=Johir-Lubaba;
        printf("Johir won by %d votes to Lubaba\n",wonByVote);
        wonByVote=Johir-Joy;
        printf("Johir won by %d votes to Joy\n",wonByVote);
        wonByVote=Johir-Shahin;
        printf("Johir won by %d votes to Shahin\n",wonByVote);
    }
}
void calculateVote(int vote)
{
    switch (vote)
    {
    case 1:
        Shahin+=1;
        break;
    case 2:
        Lubaba+=1;
        break;
    case 3:
        Joy+=1;
        break;
    case 4:
        Johir+=1;
        break;
    }
}


int main()
{
    int choose;

        printf("*********Welcome to the voting system project*********\n\n");
        printf("                        CR election                        \n\n");
        printf("*************************************************************\n");
        printf("|           1.Shahin             |          2.Lubaba         |\n");
        printf("*************************************************************\n");
        printf("|           3.Joy                |          4.Johir          |\n");
        printf("*************************************************************\n\n");



        

    do
    {    
        printf("Press 1 to vote Shahin\n");
        printf("Press 2 to vote Lubaba\n");
        printf("Press 3 to vote Joy\n");
        printf("Press 4 to vote Johir\n");
        printf("Press 5 to show election result\n");
        printf("Please choose : ");
        scanf("%d", &choose);

        if(choose==1 || choose==2 || choose==3 || choose==4){
            system ("cls");  
        }
        if (choose==5)
        {
            electionResult();
        }else
        {
            calculateVote(choose);            
        } 
        printf("\n");
    } while (choose != 5);

    return 0;
}