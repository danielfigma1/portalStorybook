import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BTronicComponent } from './b-tronic/b-tronic.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ElectronicComponent } from './electronic/electronic.component';
import { InventoryComponent } from './inventory/inventory.component';
import { ProjectComponent } from './project/project.component';
import { WarehouseComponent } from './warehouse/warehouse.component';
import { WebbgmComponent } from './webbgm/webbgm.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'electronic', component: ElectronicComponent },
  { path: 'b-tronic', component: BTronicComponent },
  { path: 'webbgm', component: WebbgmComponent },
  { path: 'inventory', component: InventoryComponent },
  { path: 'warehouse', component: WarehouseComponent },
  { path: 'project', component: ProjectComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}
