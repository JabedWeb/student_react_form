#include <stdio.h> 
#include <string.h> 
int main() 
{ 
    char username[30]; 
    char password[12]; 
    printf("Enter your surname:\n"); 
    scanf("%s",&username); 
    printf("Enter your password:\n"); 
    scanf("%s",&password);  
    if(strcmp(username,"Solaiman")==0){
        if(strcmp(password,"123")==0){ 
        printf("\nWelcome.Login Success!"); 
        }
        else
        { 
        ("\nwrong password"); 
        } 
    }
    else{ 
    printf("\nUser doesn't exist"); 
        } 
    return 0; 
} 