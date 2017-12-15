import { NgModule } from '@angular/core';
import { BuildConfig } from '../../../config/build.config';
@NgModule({
  imports: (new BuildConfig('all')).appModules(),
  declarations: [  ],
  exports: [  ],
  providers: []
})
export class CoreModule {
}
