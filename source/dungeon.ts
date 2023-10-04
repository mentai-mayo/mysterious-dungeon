
/**
 * ランダムマップ生成関数のオプション
 */
type MapRandGenFuncOpts = {
  
  // 最小ブロックサイズ
  minBlockSize: { width: number, height: number };

  // ブロック数範囲
  blockNumRange: { min: number, max: number };
};

namespace Dungeon{

  // map generator
  export class Map{

    private _map: number[];

    private _size: {width: number, height: number};

    /**
     * コンストラクタ
     * @param width マップの横幅
     * @param height マップの縦幅
     */
    public constructor(width: number, height: number){

      // widthとheightを設定
      [width, height] = [width, height].map(v=>Math.floor(v));
      if(width < 1 || height < 1) throw new Error('invalid map size');
      this._size = {width: width + 1, height: height + 1};

      // mapをとりあえず0fill
      this._map = new Array((width + 1) * (height + 1)).fill(0);
    }

    private randgen(opts: MapRandGenFuncOpts = {}): void{
      
      // block number
    }
  };
};

export default Dungeon;
