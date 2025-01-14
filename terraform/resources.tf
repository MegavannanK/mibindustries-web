resource "azurerm_service_plan" "appservice" {
  resource_group_name = "mat-rg"
  name = "mib-industries"
  location = "East US"
  sku_name = "F1"
  os_type = "Linux"
}

resource "azurerm_linux_web_app" "webapp" {
  name = "mib-industries"
  location = "East US"
    resource_group_name = "mat-rg"
    service_plan_id = azurerm_service_plan.appservice.id

    site_config {
        always_on = false
    }
    
}