terraform {
  backend "azurerm" {
    storage_account_name = "mattfstate"
    resource_group_name  = "mat-rg"
    container_name       = "tfstate"
    key                  = "terraform.tfstate"
    
  }
}
provider "azurerm" {
  features {}
  subscription_id = "606e824b-aaf7-4b4e-9057-b459f6a4436d"
}