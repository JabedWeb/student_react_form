#include<stdio.h>
int main()
{
    int num,k,i,count=0;
    for(i=1; i<=10; i++)
{
    count=0;
        for(k=1; k<=i; k++)
        {
            if(i%k==0)
            {
                count++;
            }
        }
        if(count==2)
        {
           printf("The prime number %d\n",i);
        }
}
 return 0;

}