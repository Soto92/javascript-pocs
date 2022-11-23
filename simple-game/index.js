function findBestSpot(landWidth, landHeight, exploitationWidth, exploitationHeight, goldMines) {

  if (goldMines.length === 0 || exploitationWidth === 0 || exploitationHeight === 0) {
    return {
      coordinates: {
        x: 0,
        y: 0,
      },
      goldMines: 0,
    };
  }

  const filteredMines = goldMines.filter(mine => mine.x < landWidth && mine.y < landHeight)
  const groups = []
  const limitX = exploitationWidth
  const limitY = exploitationHeight

  const checkClosedMines = () => {
    for (let i = 0; i < filteredMines.length; i++) {
      const target = filteredMines[i]
      const targetXMax = target.x + limitX
      const targetYMax = target.y + limitY

      const group = filteredMines.filter(goldMine => {
        if (target.x === goldMine.x && target.y === goldMine.y) {
          return true
        }
        if (goldMine.x > target.x && goldMine.x < targetXMax) {
          if (goldMine.y > target.y && goldMine.y < targetYMax) {
            return true
          }
        }
      })
      if (group.length > 0) {
        groups.push(group)
      }
    }
  };
  const checkBiggestGroup = (groups) => {
    const biggest = groups.sort((a, b) => {
      return b.length - a.length;
    }
    );
    if (biggest[0].length === 1) {
      biggest.sort((a, b) => {
        return a[0].x - b[0].x;
      }
      ).sort((a, b) => {
        return a[0].y - b[0].y
      });
    }

    return biggest[0];
  };

  checkClosedMines()
  const biggestOne = checkBiggestGroup(groups)

  return {
    coordinates: {
      x: biggestOne[0].x || 0,
      y: biggestOne[0].y || 0,
    },
    goldMines: biggestOne.length || 0,
  };
}

module.exports = findBestSpot;
