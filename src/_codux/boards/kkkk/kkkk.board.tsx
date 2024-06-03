import { createBoard } from '@wixc3/react-board';
import { Kkkk } from '../../../components/kkkk/kkkk';
import Kkkk_board_module from './kkkk.board.module.scss';

export default createBoard({
    name: 'Kkkk',
    Board: () => <Kkkk className={Kkkk_board_module.xdxddf} />,
    isSnippet: true,
});
