resource "azurerm_service_plan" "appservice" {
  resource_group_name = var.rg_name
  name = var.appservice_plan_name
  location = var.location
  sku_name = "F1"
  os_type = "Linux"
}

resource "azurerm_linux_web_app" "webapp" {
  name = "mib-industries"
  location = var.location
    resource_group_name = var.rg_name
    service_plan_id = azurerm_service_plan.appservice.id

    site_config {
        always_on = false
    }
    
}