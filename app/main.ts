import { platformNativeScriptDynamic, NativeScriptModule } from "nativescript-angular/platform";
import { AppComponent } from "./app.component";
import { AppModule } from "./app.module";

platformNativeScriptDynamic().bootstrapModule(AppModule);