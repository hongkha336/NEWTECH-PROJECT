import {BoardModel} from '../../model/board/board.model';


export abstract class BoardService {
  public abstract saveBoard(board: BoardModel );

  public abstract getBoard(): BoardModel;
}
