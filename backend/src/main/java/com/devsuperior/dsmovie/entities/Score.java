package com.devsuperior.dsmovie.entities;

import java.io.Serializable;

import javax.persistence.EmbeddedId;
import javax.persistence.Entity;
import javax.persistence.Table;

@Entity
@Table(name = "tb_score")

public class Score  implements Serializable {
	
	
	private static final long serialVersionUID = 1L;

	@EmbeddedId
	private Scorepk id = new Scorepk();
	
	private Double value;
	
	public Score() {		
	}
	
	public void setMovie(Movie movie) {
		id.setMovie(movie);
	}
	
	public void setUser(User user) {
		 id.setUser(user);
	}

	public Scorepk getId() {
		return id;
	}

	public void setId(Scorepk id) {
		this.id = id;
	}

	public Double getValue() {
		return value;
	}

	public void setValue(Double value) {
		this.value = value;
	}
	
	
	
	
	

}
