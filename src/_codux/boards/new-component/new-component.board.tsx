import { createBoard } from '@wixc3/react-board';
import { NewComponent } from '../../../components/new-component/new-component';
import NewComponent_board_module from './new-component.board.module.scss';

export default createBoard({
    name: 'NewComponent',
    Board: () => <NewComponent className={NewComponent_board_module.koooo} />,
    isSnippet: true,
});
