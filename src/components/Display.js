import React from 'react'
import Articles from './Articles'

const Display = ({ viewPolice, policeList, text, sizePolice, loading, error }) => {
  return (
    <div className="col-lg-9">
      <section className="row mb-5">
        <h2 className="mb-3">
          <span className="badge bg-danger" style={{ color: 'white' }}>{viewPolice}</span>
        </h2>
        {loading && <p className="text-center">loading...</p>}
        {error && <p className="px-2 text-center alert alert-danger">{error}</p>}
        {
          policeList.slice(0, 10).map((elem) => {
            return (
              <Articles key={elem.family}
                text={text}
                sizePolice={sizePolice}
                policeFamily={elem.family}
                policeVariant={elem.variants.length}
                policeCategory={elem.category}
              />
            )
          }
          )
        }
      </section>
    </div>
  )
}

export default Display
