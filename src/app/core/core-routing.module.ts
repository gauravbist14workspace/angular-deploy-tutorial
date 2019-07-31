import { NgModule } from '@angular/core';
import { CaptureImageComponent } from './capture-image/capture-image.component';
import { Route, RouterModule } from '@angular/router';
import { CorosalComponent } from './corosal/corosal.component';

const routes: Route[] = [
    {
        path: 'camera', component: CaptureImageComponent
    },
    {
        path: 'corosal', component: CorosalComponent
    }
];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CoreRoutingModule {
}
