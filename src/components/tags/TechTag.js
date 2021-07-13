import React from "react"
import "./tags.css"
import { Link } from "gatsby"
const TechTag = props => {
  const { tag, tech, name, size, color } = props
  const nameVal = name.includes("[") ? JSON.parse(name) : name
  return (
    <div className="d-inline-block p-1">
      <Link to={`/tags/${tag}/`}>
        <button className="tech-tag text-white">
          <p className="d-inline">{tech} </p>
          <div className="d-inline" style={{ fontSize: size, color: color }}>
            {typeof nameVal === "object" ? (
              <svg
                width="20px"
                height="20px"
                viewBox="0 0 256 328"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="xMidYMid"
              >
                <g>
                  {nameVal.map(path => {
                    return <path d={path.d} fill={path.color} />
                  })}
                </g>
              </svg>
            ) : (
              <svg
                role="img"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                width={size}
                height={size}
                style={{ fill: `${color}` }}
              >
                <title>{tech}</title>
                <path d={name} />
              </svg>
            )}
          </div>
        </button>
      </Link>
    </div>
  )
}
export default TechTag
