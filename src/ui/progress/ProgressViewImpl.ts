import {ProgressView} from 'dncomponents/lib/progress/view/ProgressView';
import {TemplateParser, UiField} from 'dncomponents/lib/TemplateParser';
import {ViewFactory} from 'dncomponents/lib/views/ComponentsViews';
import {ProgressBarTypes} from './ProgressBarTypes';
import {java} from 'j4ts';
import {Ui} from 'dncomponents/lib/views/Ui';

export class ProgressViewImpl implements ProgressView {
    public static VIEW_ID: string = 'default';

    @UiField
    public root: HTMLElement;
    @UiField
    public progressBar: HTMLElement;
    @UiField
    public bufferedBar: HTMLElement;


    constructor(template: HTMLTemplateElement) {
        TemplateParser.create(template, this, true).bind();
    }


    public setBarWidth(percent: number) {
        this.progressBar.style.setProperty('transform', 'scaleX(' + (percent / 100.0) + ')');
    }

    public setBuffered(buffered: number): void {
        this.bufferedBar.style.setProperty('transform', 'scaleX(' + buffered + ')');
    }

    public setBarText(text: string) {
        // this.progressBar.textContent = text;
    }

    public setMinimumWidth(minimumWidth: number) {
        this.progressBar.style.minWidth = (minimumWidth + 'em');
    }

    public asElement(): HTMLElement {
        return this.root;
    }
}

export namespace ProgressViewImpl {
    export class Builder {
        private type: ProgressBarTypes;
        private buffered: number;
        private templateElement: HTMLTemplateElement;


        public static typeId = 'type';
        public static bufferedId = 'buffered';

        private Builder() {
        }


        public static get(): Builder {
            return new Builder();
        }

        public setType(type: ProgressBarTypes): Builder {
            this.type = type;
            return this;
        }

        public template(templateElement: HTMLTemplateElement): Builder {
            this.templateElement = templateElement;
            return this;
        }

        public setBuffered(buffered: number): Builder {
            this.buffered = buffered;
            return this;
        }

        public build(): ProgressViewImpl {
            let progressView = null;
            if (this.templateElement == null)
                progressView = <ProgressViewImpl>Ui.get().getProgressView();
            else
                progressView = new ProgressViewImpl(this.templateElement);
            let style = this.type != null ? this.type.getStyle() : '';
            if (style != null && !(style.length === 0))
                progressView.root.classList.add(style);
            if (this.buffered != 0)
                progressView.setBuffered(this.buffered);
            return progressView;
        }
    }

}

export class ProgressViewFactory implements ViewFactory<ProgressView> {

    private static instance: ProgressViewFactory;

    private constructor() {
    }

    public static getInstance(): ProgressViewFactory {
        if (this.instance == null)
            return this.instance = new ProgressViewFactory();
        return this.instance;
    }

    public getView(attributes: Map<string, string>, templateElement: HTMLTemplateElement): ProgressView {
        let type = ProgressBarTypes.lookUp.getValue(attributes.get(ProgressViewImpl.Builder.typeId));
        let buffered = attributes.get(ProgressViewImpl.Builder.bufferedId);
        let bufferedDouble = 0;
        if (buffered != null && !(buffered.length == 0)) {
            try {
                bufferedDouble = parseFloat(buffered);
            } catch (ex) {
                console.log('Error parsing buffer');
            }
        }
        let progressView = ProgressViewImpl.Builder.get().setType(type).setBuffered(bufferedDouble).build();
        return progressView;
    }

    public getId(): string {
        return ProgressViewImpl.VIEW_ID;
    }

    public getClazz(): string {
        return 'ProgressViewImpl';
    }
}
