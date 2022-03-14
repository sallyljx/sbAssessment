package org.generation.SpringBootAssessment.repository;
import org.generation.SpringBootAssessment.repository.Entity.Item;
import org.springframework.data.repository.CrudRepository;

public interface ItemRepository extends CrudRepository<Item, Integer>
{
}
