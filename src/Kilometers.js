function Kilometers({flipped, onChange, amount}) {
    return (
      <div>
        <label htmlFor="kilometers">Kilometers</label>
        <input 
          value={flipped ? amount*1.60934 : amount}
          id="kilometers" 
          placeholder="Kilometers"
          type="number" 
          onChange={onChange}
          disabled={flipped === true}
        />
      </div>
    )
}
export default Kilometers;