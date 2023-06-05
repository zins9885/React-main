

const MemberBox = ({name, gender, song}) => {
  return (
    <div className="q">
        <p>이름 : {name}</p>
        <p>성별 : {gender}</p>
        <p>좋아하는 노래 : {song}</p>

    </div>
  )
}

export default MemberBox