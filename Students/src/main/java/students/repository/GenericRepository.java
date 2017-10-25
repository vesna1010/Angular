package students.repository;

import java.io.Serializable;
import java.util.List;

public interface GenericRepository<ID extends Serializable, E extends Serializable> {

	List<E> findAll();
	
	E findOne(ID id);
	
	void save(E e);
	
	void update(E e);
	
	void deleteById(ID id);

}
