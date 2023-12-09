import { Component, EventEmitter, Output } from "@angular/core";

@Component({
    selector: "app-header",
    templateUrl: "./header.component.html"
})
export class HeaderComponent {
    @Output() featureSeleced = new EventEmitter<string>();
    
    constructor() { }

    onSelect(feature: string) {
        this.featureSeleced.emit(feature);
    }
}
