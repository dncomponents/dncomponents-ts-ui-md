import {TableTreeUi} from './TableTreeUi';
import {TreeUi} from 'dncomponents/lib/tree/view/TreeUi';
import {TreeTUi} from './TreeTUi';
import {TableUiImpl} from './TableUiBs';

export class TableTreeUiImpl extends TableUiImpl implements TableTreeUi {


    treeUi: TreeTUi = new TreeTUi();

    public constructor() {
        super();
        this.treeUi== new TreeTUi();
    }


    public getTreeUi(): TreeUi {
        return this.treeUi;
    }


    asElement(): HTMLElement {
        return this.getRootView().asElement();
    }
}
