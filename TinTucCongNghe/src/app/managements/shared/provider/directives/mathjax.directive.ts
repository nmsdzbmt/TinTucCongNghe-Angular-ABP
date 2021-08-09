import { Directive, ElementRef, Input } from '@angular/core';

declare var MathJax: any;
declare var $: any;

@Directive({
    selector: '[MathJax]'
})
export class MathJaxDirective {
    @Input('MathJax') fractionString: string;

    constructor(private el: ElementRef) {
    }

    ngOnChanges() {
        MathJax.Hub.Config({
            CommonHTML: { linebreaks: { automatic: true } },
            "HTML-CSS": { linebreaks: { automatic: true } },
            SVG: { linebreaks: { automatic: true } },
            tex2jax: {
                inlineMath: [['$', '$'], ['$$', '$$'], ['\\(', '\\)']],
                processEscapes: true
            }
        });
        this.el.nativeElement.innerHTML = this.fractionString;

        MathJax.Hub.Queue(["Typeset", MathJax.Hub, this.el.nativeElement],() => {
            let a = $(this.el.nativeElement).hasClass('clear-assitive');

            if (a) {
                $(this.el.nativeElement).find('.MJX_Assistive_MathML').remove();
            }
        });

    }
}